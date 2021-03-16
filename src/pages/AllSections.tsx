import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

const AllSections: React.FC = () => {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>All Sections</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				<h2>Welcome to All Sections page !!!</h2>
			</IonContent>
		</IonPage>
	);
};

export default AllSections;
