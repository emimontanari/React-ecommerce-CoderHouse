
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBER_gGwVOKj7l2AnykWX1ROf5XFhC6ABM",
    authDomain: "sneakerse-ecommerce.firebaseapp.com",
    projectId: "sneakerse-ecommerce",
    storageBucket: "sneakerse-ecommerce.appspot.com",
    messagingSenderId: "929207790319",
    appId: "1:929207790319:web:cabcf166f529d3f0be491a"
  };
  
const app = initializeApp(firebaseConfig);

export const getFireStoreApp = () => {
    return app
}