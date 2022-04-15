
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { API, Server_url } from "../../adapters/apis";
import { getApiCall } from "../../adapters/callmethods";
 import { FiltersReducer } from "../reducers/filters";

const NotesListContext = createContext();

const NoteListProvider = ({ children }) => {
  const [state, dispatch] = useReducer(FiltersReducer, {
    allNotes: [],
    deletedNotes:[],
    archiveNotes:[],
    sort: null,
  });

  useEffect(() => {
      let url=Server_url+API.notes.note_list
      getApiCall(url , token)
    //   .then(json=>dispatch({type : '' , payload : json.data}))
  }, []);
  return (
    <NotesListContext.Provider value={{ state, dispatch }}>
      {children}
    </NotesListContext.Provider>
  );
};

const usenoteList = () => {
  return useContext(NotesListContext);
};

export { NoteListProvider, usenoteList };