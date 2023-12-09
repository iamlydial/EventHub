import { createStore } from "redux";

const greetingReducer = (state, action) => {
  if (action.type === "changeGreeting") {
    return { greeting: action.payload };
  } else {
    return state;
  }
};

export const store = createStore(greetingReducer, { greeting: "Welcome" });

Component.js;
const greeting = useSelector((s) => s.greeting);
const dispatch = useDispatch();

function whenButtonPressed() {
  dispatchEvent({ type: "changeGreeting", paylod: "Hi Mina" });
}
