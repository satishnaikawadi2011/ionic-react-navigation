import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { useHistory } from 'react-router-dom';

const Courses: React.FC = () => {
	const history = useHistory();
	const changePageHandler = () => {
		history.push('/course-sections');
	};
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Courses</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				<h2>Welcome to courses page !!!</h2>
				<div>
					{/* <IonButton routerLink="/course-sections">To Course Sections Page</IonButton> */}
					<IonButton onClick={changePageHandler}>To Course Sections Page</IonButton>
				</div>
			</IonContent>
		</IonPage>
	);
};

export default Courses;
