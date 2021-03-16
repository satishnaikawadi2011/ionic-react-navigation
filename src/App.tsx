import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonIcon, IonLabel, IonRouterOutlet, IonTab, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
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
import Courses from './pages/Courses';
import CourseSections from './pages/CourseSections';
import { list, trophyOutline } from 'ionicons/icons';
import AllSections from './pages/AllSections';

const App: React.FC = () => (
	<IonApp>
		<IonReactRouter>
			<IonTabs>
				<IonRouterOutlet>
					<Route path="/courses" exact>
						<Courses />
					</Route>
					<Route path="/course-sections">
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
