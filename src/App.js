import React from 'react';
import  { BrowserRouter, Route, Switch } from 'react-router-dom';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Skills from './pages/Skills';
import NotFound from './pages/NotFound';
import Portfolio from './pages/Portfolio';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component= {Home}/>
          <Route path="/skills" exact component= {Skills}/>
          <Route path="/portfolio" exact component= {Portfolio}/>
          <Route path="/contact" exact component= {Contact}/>
          <Route component= {NotFound} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;



// function App() {
//   return (
//     <Switch>
//       <Route exact path="/" component={Home} />
//       <Route exact path="/project-1" component={Project1} />
//       <Route exact path="/project-2" component={Project2} />
//       <Route exact path="/contact" component={Contact} />
//       <Redirect to="/" />
//     </Switch>
//   );
// }
