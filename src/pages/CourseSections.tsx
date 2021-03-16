import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

const CourseSections: React.FC = () => {
	return (
		<React.Fragment>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Course Sections</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				<h2>Welcome to Course Sections page !!!</h2>
			</IonContent>
		</React.Fragment>
	);
};

export default CourseSections;
