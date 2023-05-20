import React from 'react';
import "./HeaderExersisePage.css";

export default function HeaderExersisePage() {
  return (
    <>
      <header>
        <h2>Start training today, create your routine...</h2>
        <p>Here you will find information about the main exercises in a workout and specific
          exercises for different parts of the body, such as abdomen, chest, arms, back, shoulders and legs.</p>
      </header>

      <div className="description">

        <div className="exercise-section">
          <h3>Abdomen</h3>
          <img src="https://i.ibb.co/FDqTP5n/gym-workout-royalty-free-image-926667132-1552467374.jpg" alt="Abdomen" />
          <p>The abdomen, or core, encompasses the muscles of the abdominals, obliques, and lower back.
            These muscles provide stability and support for the spine and pelvis, contributing to proper posture and balance. Strengthening the core muscles can improve overall body strength, assist in daily activities, and reduce the risk of back pain.
            Exercises like planks, crunches, and Russian twists target the core.</p>
        </div>

        <div className="exercise-section">
          <h3>Pectorals</h3>
          <img src="https://i.ibb.co/m6k9j8C/pectorals.jpg" alt="Pecho" />
          <p>The chest muscles, specifically the pectoralis major and pectoralis minor, are responsible for movements such as pushing and pressing.
            Strengthening the chest muscles can enhance upper body strength and improve posture.
            Chest exercises like push-ups, bench presses, and chest flyes target these muscles.</p>
        </div>

        <div className="exercise-section">
          <h3>Arms</h3>
          <img src="https://i.ibb.co/g9knwfG/biceps-cable-curls-in-gym-royalty-free-image-1620204857.jpg" alt="Brazos" />
          <p>The arm muscles consist of the biceps, triceps, and forearms. The biceps are responsible for flexing the elbow joint, while the triceps are
            responsible for extending it. Strengthening the arm muscles can improve grip strength, enhance overall arm definition, and assist in various upper body movements.
            Exercises like bicep curls, tricep dips, and hammer curls target these muscles.</p>
        </div>

        <div className="exercise-section">
          <h3>Back</h3>
          <img src="https://i.ibb.co/KbtYGKg/Diseno-sin-titulo-2022-11-18-T220225-115.jpg" alt="Espalda" />
          <p>The back muscles consist of the latissimus dorsi, rhomboids, and erector spinae muscles, among others.
            They provide support, stability, and assist in movements such as pulling and rowing. Strengthening the back muscles can improve posture,
            enhance overall back strength, and reduce the risk of back-related issues. Exercises like pull-ups, rows, and deadlifts target these muscles.</p>
        </div>

        <div className="exercise-section">
          <h3>Shoulders</h3>
          <img src="https://i.ibb.co/hBShmnz/shoulders.jpg" alt="shoulders" />
          <p>The shoulder muscles, including the deltoids and rotator cuff muscles, allow for a wide range of arm and shoulder movements.
            Strong shoulders enhance upper body strength and stability, improving performance in
            activities such as lifting, throwing, and reaching. Shoulder exercises like shoulder presses, lateral raises,
            and upright rows target these muscles.</p>
        </div>

        <div className="exercise-section">
          <h3>Legs</h3>
          <img src="https://i.ibb.co/X2GLLYs/legs.jpg" alt="Piernas" />
          <p>The leg muscles include the quadriceps, hamstrings, calves, and glutes. They provide support, stability,
            and power for various movements such as walking, running, jumping, and squatting.
            Leg exercises help strengthen and tone these muscles, improving lower body strength and overall athleticism.</p>
        </div>
      </div>
    </>
  );
}
