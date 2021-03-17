import { Redirect, Route } from 'react-router-dom';
import {
	IonApp,
	IonContent,
	IonHeader,
	IonIcon,
	IonItem,
	IonLabel,
	IonList,
	IonMenu,
	IonMenuToggle,
	IonRouterOutlet,
	IonTab,
	IonTabBar,
	IonTabButton,
	IonTabs,
	IonTitle,
	IonToolbar
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './theme/theme.css';
import Courses from './pages/Courses';
import CourseSections from './pages/CourseSections';
import { list, options, trophyOutline } from 'ionicons/icons';
import AllSections from './pages/AllSections';
import Filter from './pages/Filter';

const App: React.FC = () => (
	<IonApp>
		<IonReactRouter>
			<IonMenu contentId="main">
				<IonHeader>
					<IonToolbar>
						<IonTitle>Course Sections</IonTitle>
					</IonToolbar>
				</IonHeader>
				<IonContent>
					<IonList>
						<IonMenuToggle>
							<IonItem button routerLink="/all-sections" routerDirection="none">
								<IonIcon slot="start" icon={list} />
								<IonLabel>All Sections</IonLabel>
							</IonItem>
						</IonMenuToggle>
						<IonMenuToggle>
							<IonItem button routerLink="/filter" routerDirection="none">
								<IonIcon slot="start" icon={options} />
								<IonLabel>Filter</IonLabel>
							</IonItem>
						</IonMenuToggle>
					</IonList>
				</IonContent>
			</IonMenu>
			<IonTabs>
				<IonRouterOutlet id="main">
					<Route path="/filter" exact>
						<Filter />
					</Route>
					<Route path="/courses" exact>
						<Courses />
					</Route>
					<Route path="/courses/:courseId/course-sections">
						<CourseSections />
					</Route>
					<Route path="/all-sections" exact>
						<AllSections />
					</Route>
					<Redirect to="/courses" />
				</IonRouterOutlet>
				<IonTabBar slot="bottom">
					<IonTabButton tab="all-sections" href="/all-sections">
						<IonIcon icon={list} />
						<IonLabel>All Sections</IonLabel>
					</IonTabButton>
					<IonTabButton tab="courses" href="/courses">
						<IonIcon icon={trophyOutline} />
						<IonLabel>Courses</IonLabel>
					</IonTabButton>
				</IonTabBar>
			</IonTabs>
		</IonReactRouter>
	</IonApp>
);

export default App;
