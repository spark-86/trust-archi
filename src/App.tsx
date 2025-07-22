import { BrowserRouter, Route, Routes } from "react-router";
import PageContainer from "./pages/PageContainer";
import PageGT from "./pages/gt/PageGT";
import Header from "./widgets/Header";
import Footer from "./widgets/Footer";

function App() {
    const createRoute = (path: string, pageName: string) => {
        return (
            <Route
                path={path}
                element={<PageContainer pageName={pageName} />}
            />
        );
    };

    return (
        <>
            <BrowserRouter>
                <Routes>
                    {createRoute("/", "Home")}
                    {createRoute(
                        "/temporal-cryptophysics",
                        "TemporalCryptophysics"
                    )}
                    {createRoute("/genesis-clock", "GenesisClock")}
                    {createRoute("/rhex-format", "RhexFormat")}
                    {createRoute("/scope-and-truth", "ScopeAndTruth")}
                    {createRoute("/selfid", "SelfID")}
                    {createRoute("/hodo-trust", "HodoTrust")}
                    {createRoute("/manifesto", "Manifesto")}
                    {createRoute("/sample-records", "SampleRecords")}
                    {createRoute(
                        "/ledger-as-time-crystal",
                        "LedgerAsTimeCrystal"
                    )}
                    {createRoute("/tc-faq", "TCFAQ")}
                    {createRoute("/glossary", "Glossary")}
                    {createRoute("/rhex-protocol", "RhexProtocol")}
                    <Route
                        path="/gt"
                        element={
                            <>
                                <Header />
                                <PageGT />
                                <Footer />
                            </>
                        }
                    />
                    <Route
                        path="*"
                        element={<PageContainer pageName="Home" />}
                    />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
