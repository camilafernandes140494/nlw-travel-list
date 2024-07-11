import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { TripDetails } from "./pages/TripDetails/TripDetails";
import { CreateTrip } from "./pages/CreateTrip/CreateTrip";


const router = createBrowserRouter([
  {
    path: "/",
    element: <CreateTrip />,
  },
  {
    path: "/trips/:tripId",
    element: <TripDetails />,
  },
]);

export function App() {
  return (
    <RouterProvider router={router} />
  );
}