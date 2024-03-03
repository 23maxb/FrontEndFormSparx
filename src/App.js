import logo from './logo.svg';
import './App.css';
import './css/formation-4140cf.webflow.css';
import './css/normalize.css';
import OutreachGoals from './dropdown';
import MathComponent from './MathComp';
import 'bootstrap/dist/css/bootstrap.min.css';
import TargetAudiences from "./targetAudiences";

function App() {
    return (
        <div className="App">
            <section className="section">
                <div className="w-layout-blockcontainer container w-container">
                    <div className="header-centered-div">
                        <h1 className="heading-2">Customize Your Influencer Marketing Package</h1>
                        <p className="paragraph">Tailor your package to fit your needs. Choose the number of
                            influencers, your preferred platform, and pick your outreach goals.</p>
                    </div>

                    <MathComponent></MathComponent>

                    <div className="outreach-goal">
                        <h2 className="heading-4">Outreach Goals</h2>
                        <p className="paragraph-2">Select the desired outreach goal for your influencer marketing
                            campaign</p>
                        <div className={"max-w-500px"}><OutreachGoals/></div>
                    </div>
                    <div className="target-audiences">
                        <h2 className="heading-4">Target Audiences</h2>
                        <p className="paragraph-2">Define your target audience for the influencer marketing
                            campaign.</p>
                    </div>
                    <TargetAudiences></TargetAudiences>
                </div>
            </section>
        </div>
    );
}

export default App;
