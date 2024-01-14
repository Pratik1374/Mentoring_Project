import { createContext, useContext, useState } from 'react';

const MentorContext = createContext();

export const useMentorContext = () => {
  return useContext(MentorContext);
};

export const MentorProvider = ({ children }) => {
  const [selectedMentor, setSelectedMentor] = useState(null);

  const setSelectedMentorAndUpdate = (mentor) => {
    setSelectedMentor(mentor);
  };

  return (
    <MentorContext.Provider value={{ selectedMentor, setSelectedMentor: setSelectedMentorAndUpdate }}>
      {children}
    </MentorContext.Provider>
  );
};
