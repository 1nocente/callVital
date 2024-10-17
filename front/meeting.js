import React, { useState } from 'react';
import axios from 'axios';

function Meeting() {
  const [meetingUrl, setMeetingUrl] = useState('');

  const createMeeting = async () => {
    try {
      const response = await axios.get('http://localhost:3001/generate-meeting');
      setMeetingUrl(response.data.url);
    } catch (error) {
      console.error('Erro ao gerar reunião:', error);
    }
  };

  return (
    <div>
      <h1>Reunião Jitsi Meet</h1>
      <button onClick={createMeeting}>Criar Reunião</button>
      {meetingUrl && (
        <iframe
          title="Jitsi Meeting"
          src={meetingUrl}
          style={{ width: '100%', height: '500px', border: 'none' }}
          allow="camera; microphone; fullscreen"
        ></iframe>
      )}
    </div>
  );
}

export default Meeting;
