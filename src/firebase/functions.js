import {
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { firestore } from "./config";

export const saveAllocation = async (allocation) => {
  const { date, medicine, timeSlot } = allocation;

  const allocationRef = doc(firestore, "allocations", date);
  const existingAllocation = await getDoc(allocationRef);

  if (existingAllocation.exists()) {
    const existingData = existingAllocation.data() || {};
    const existingMedicines = existingData.medicines || [];

    await setDoc(
      allocationRef,
      { medicines: [...existingMedicines, { medicine, timeSlot }] },
      { merge: true }
    );
  } else {
    await setDoc(allocationRef, { medicines: [{ medicine, timeSlot }] });
  }
};

export const saveItem = async (data) => {
  try {
    const docRef = doc(firestore, "availability", `${data.date}`);
    await setDoc(docRef, data, { merge: true });
    console.log("Document successfully written!");
  } catch (error) {
    console.error("Error writing document: ", error);
    throw error;
  }
};

export const appendValuesToDoctorByEmail = async (docEmail, valuesToAppend) => {
  try {
    const q = query(
      collection(firestore, "doctors"),
      where("doctor.email", "==", docEmail)
    );
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      console.error("No doctor found with the email:", docEmail);
      return;
    }

    const document = querySnapshot.docs[0]; // Assuming there's only one doctor with the given email
    const docRef = doc(firestore, "doctors", document.id);
    const doctorData = document.data().doctor;
    const updatedValues = { ...doctorData };

    // Append values to fields
    for (const field in valuesToAppend) {
      if (valuesToAppend.hasOwnProperty(field)) {
        if (updatedValues[field]) {
          // If the field already exists, append the new value
          updatedValues[field] += valuesToAppend[field];
        } else {
          // If the field doesn't exist, create it with the new value
          updatedValues[field] = valuesToAppend[field];
        }
      }
    }

    // Update the "doctor" object inside the document with the appended values
    await updateDoc(docRef, { doctor: updatedValues });
    console.log("Values appended successfully for doctor:", docEmail);
  } catch (error) {
    console.error("Error appending values for doctor:", docEmail, error);
  }
};
export const updateDoctorsByEmail = async (docEmail, newData) => {
  // console.log('zxjchgv')
  try {
    const q = query(
      collection(firestore, "doctors"),
      where("email", "==", docEmail)
    );
    console.log("djgcsxvj", docEmail);
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(async (document) => {
      try {
        const docRef = doc(firestore, "doctors", document.id);
        await setDoc(docRef, newData);
        console.log("Data updated successfully for doctor:", docEmail);
      } catch (error) {
        console.error("Error updating data for doctor:", docEmail, error);
      }
    });
  } catch (error) {
    console.error("Error querying data:", error);
  }
};

// Adding Doctors
export const addDoctor = async (doctorObject) => {
  const doctorRef = doc(collection(firestore, "doctors"));
  await setDoc(doctorRef, doctorObject, { merge: true });
};
export const addChat = async (chatObject) => {
  console.log("Chat Object:", chatObject);
  const chatRef = doc(collection(firestore, "chats"));
  await setDoc(chatRef, chatObject, { merge: true });
};

export const addQuestionDetails = async (questobj) => {
  const qRef = doc(collection(firestore, "questions"));
  await setDoc(qRef, questobj, { merge: true });
};

// Adding Patients
export const addPatient = async (patientObject) => {
  const patientRef = doc(collection(firestore, "patients"));
  await setDoc(patientRef, patientObject, { merge: true });
};

export const getAllChats = async () => {
  const items = await getDocs(query(collection(firestore, "chats")));
  return items.docs.map((doc) => doc.data());
};

// get all patients
export const getAllPatients = async () => {
  const querySnapshot = await getDocs(collection(firestore, "patients"));

  return querySnapshot.docs.map((doc) => doc.data());
};

export const getAllDoctors = async () => {
  const querySnapshot = await getDocs(collection(firestore, "doctors"));

  return querySnapshot.docs.map((doc) => doc.data());
};

// get all doctors
