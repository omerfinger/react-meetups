import { Route, Routes } from "react-router-dom";
import "./App.css";
import { MainNavigation } from "./components/layout/MainNavigation/MainNavigation";
import { AllMeetups } from "./pages/AllMeetups";
import { Favorites } from "./pages/Favorites";
import { NewMeetup } from "./pages/NewMeetup";
import { MainSection } from "./components/layout/MainSection/MainSection";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <MainNavigation />
        <MainSection>
          <Routes>
            <Route path="/" element={<AllMeetups />}></Route>
            <Route path="/favorites" element={<Favorites />}></Route>
            <Route path="/new-meetup" element={<NewMeetup />}></Route>
          </Routes>
        </MainSection>
      </QueryClientProvider>
    </div>
  );
}

export default App;
