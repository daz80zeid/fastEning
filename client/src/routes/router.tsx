import {ComponentType} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Home, RegistrationForm, AuthorizedHome, LoginForm, Articles, ArticleForm, Terms, TermForm, RegistrationModal } from '../features';

function Router() {
    const isAuthenticated = true; // replace after write logic
    const isAdmin = true; // replace after write logic

    const requireAuth = (component: any) =>
        isAuthenticated ? component : <Redirect to="/login" />;

    const requireAdmin = (component: ComponentType) =>
        isAdmin ? component : <Redirect to="/" />;

    return (
        <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={RegistrationModal} />
    <Route exact path="/register" component={RegistrationModal} />
            <Route exact path="/main" component={AuthorizedHome} />
    <Route exact path="/articles" component={requireAuth(Articles)} />
    <Route exact path="/articles/new" component={requireAuth(ArticleForm)} />
    <Route exact path="/articles/:id/edit" component={requireAuth(ArticleForm)} />
    <Route exact path="/terms" component={requireAuth(Terms)} />
    <Route exact path="/terms/new" component={requireAuth(TermForm)} />
    <Route exact path="/terms/:id/edit" component={requireAuth(TermForm)} />
            <Route exact path="/test" component={requireAuth(RegistrationModal)} />
    <Redirect to=""/>
        </Switch>
);
}

export default Router;