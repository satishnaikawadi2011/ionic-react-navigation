import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { useParams } from 'react-router-dom';
import { COURSES } from '../data';

const CourseSections: React.FC = () => {
	const { courseId } = useParams<{ courseId: string }>();
	const selectedCourse = COURSES.find((course) => course.id === courseId);
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						<IonBackButton defaultHref="/" />
					</IonButtons>
					<IonTitle>
						{
							selectedCourse ? selectedCourse.title :
							'No Course Found !'}
					</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				<h2>Welcome to Course Sections page !!!</h2>
			</IonContent>
		</IonPage>
	);
};

export default CourseSections;
