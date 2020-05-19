import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import Test from '../components/Test';
import Parent from '../components/Parent';

const Tab1: React.FC = () => {
  const TITLE="Titre principal 1";

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* <ExploreContainer name="Tab 1 page" /> */}
        <Test title={TITLE} />
        <Test title={TITLE} />
        <Parent >
          <h2>Composant enfant</h2>
        </Parent>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
