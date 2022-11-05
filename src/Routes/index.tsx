import { PUBLIC_PAGE } from '~/enums/namePath';
import Contact from '~/pages/Contact';
import Home from '~/pages/Home';

const publicRoute: any = [
    { path: PUBLIC_PAGE.HOME, component: Home },
    { path: PUBLIC_PAGE.CONTACT, component: Contact },
];

const privateRoute: any = [];

export { publicRoute, privateRoute };
