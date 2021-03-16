import {
	IonButton,
	IonCard,
	IonCardContent,
	IonCol,
	IonContent,
	IonGrid,
	IonHeader,
	IonPage,
	IonRow,
	IonTitle,
	IonToolbar
} from '@ionic/react';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { COURSES } from '../data';

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
				{/* <div>
					<IonButton routerLink="/course-sections">To Course Sections Page</IonButton>
					<IonButton onClick={changePageHandler}>To Course Sections Page</IonButton>
				</div> */}
				<IonGrid>
					{COURSES.map((course) => {
						return (
							<IonRow key={course.id}>
								<IonCol sizeMd="4" offsetMd="4">
									<IonCard>
										<IonCardContent className="ion-text-center">
											<h2>{course.title}</h2>
											<IonButton>view Course Sections</IonButton>
										</IonCardContent>
									</IonCard>
								</IonCol>
							</IonRow>
						);
					})}
				</IonGrid>
			</IonContent>
		</IonPage>
	);
};

export default Courses;
