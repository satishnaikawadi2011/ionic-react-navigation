import { IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import { list, trophyOutline } from 'ionicons/icons';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import AllSections from './AllSections';
import Courses from './Courses';
import CourseSections from './CourseSections';

const CourseTabs: React.FC = () => {
	return (
		<IonTabs>
			<IonRouterOutlet>
				<Redirect path="/courses" to="/courses/list" exact />
				{/* <Switch> */}
				<Route path="/courses/list" exact>
					<Courses />
				</Route>
				<Route path="/courses/:courseId/course-sections">
					<CourseSections />
				</Route>
				<Route path="/courses/all-sections" exact>
					<AllSections />
				</Route>
				{/* </Switch> */}
			</IonRouterOutlet>
			<IonTabBar slot="bottom">
				<IonTabButton tab="all-sections" href="/courses/all-sections">
					<IonIcon icon={list} />
					<IonLabel>All Sections</IonLabel>
				</IonTabButton>
				<IonTabButton tab="courses" href="/courses/list">
					<IonIcon icon={trophyOutline} />
					<IonLabel>Courses</IonLabel>
				</IonTabButton>
			</IonTabBar>
		</IonTabs>
	);
};

export default CourseTabs;
