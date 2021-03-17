import { IonContent, IonHeader, IonButtons, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

const Filter: React.FC = () => {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						<IonMenuButton />
					</IonButtons>
					<IonTitle>Filter</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				<h2>This is filter pages ...</h2>
			</IonContent>
		</IonPage>
	);
};

export default Filter;
