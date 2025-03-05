import "./App.css";
import AddNewProjectComponent from "./components/AddNewProjectComponent";
import "./components/TopNavbarComponent"
import TopNavbarComponent from "./components/TopNavbarComponent";
import SidebarComponent from "./components/SidebarComponent";
import DashboardComponent from "./components/DashboardComponent";
import LearningMaterialsComponent from "./components/LearningMaterialsComponent";
import CardComponent from "./components/CardComponent";
import AssignmentsComponent from "./components/AssignmentsComponent";


function App() {
  return (
    <>
    <div className="grid grid-cols-12">
      <div className="col-span-3">
        <SidebarComponent />
      </div>

      <div className="col-span-9 bg-[#F5F7F8] px-10 py-6">
      <TopNavbarComponent />
      <div className="grid grid-cols-12 mt-10">
        <div className="col-span-9">
          <div>
            <DashboardComponent />
          </div>
          
          <div className="grid grid-cols-12 mt-10">
            <div className="col-span-10">
              <AssignmentsComponent />
            </div>
            <div className="col-span-2 pl-11">
              <AddNewProjectComponent />
            </div>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-4 scrollbar-hide overflow-auto h-[57vh]">
            <div>
              <CardComponent />
            </div>
            <div>
              <CardComponent />
            </div>
            <div>
              <CardComponent />
            </div>
            <div>
              <CardComponent />
            </div>
            <div>
              <CardComponent />
            </div>
            <div>
              <CardComponent />
            </div>
            <div>
              <CardComponent />
            </div>
            <div>
              <CardComponent />
            </div>
            <div>
              <CardComponent />
            </div>
            <div>
              <CardComponent />
            </div> 

          </div>
        </div>
        <div className="col-span-3 pl-12">
          <LearningMaterialsComponent />
        </div>
      </div>
      </div>
    </div>
    </>
  );
}

export default App;
