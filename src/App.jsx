
import { useState } from "react";
import Phase1 from "./Phase1";
import Phase2 from "./Phase2";
import Phase3 from "./Phase3";

function App() {
  const [phase, setPhase] = useState("phase1");
  const [language, setLanguage] = useState("en");
  const [userName, setUser] = useState("");
  const [accountData, setAccountData] = useState([]);

  const goToPhase2 = () => setPhase("phase2");
  const goToPhase3 = (data) => {
    setAccountData(data);
    setPhase("phase3");
  };
  const backToPhase2 = () => setPhase("phase2");

  return (
    <>
      {phase === "phase1" && (
        <Phase1 onNext={goToPhase2} language={language} setLanguage={setLanguage} setUser={setUser} />
      )}
      {phase === "phase2" && (
        <Phase2
          onNext={goToPhase3}
          onBack={() => setPhase("phase1")}
          language={language}
        />
      )}
      {phase === "phase3" && (
        <Phase3
          data={accountData}
          onFinish={backToPhase2}
        />
      )}
    </>
  );
}

export default App;
