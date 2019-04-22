<Header />
	<Link to='/' className="nav__link">	Boards </Link>
	<Link to='/lists'	className="nav__link">	Lists  </Link>
<Main />
	<Switch>
    <Route exact path='/' component={HomePage} />
			<Boards />
				<EmptyBoard />
    <Route path='/lists' component={ListsPage} />
			<Lists />
				<LoadLists />
					<List />
						<ListItem />
						<AddTask /> 		// Получает из инпута таск и добавляет его в лист
							<AddBlock />
							<Input />
							<Controls />
			<EmptyList /> 				// Получает из инпута имя листа и создает новый лист
				<AddBlock />
				<Input />
				<Controls />




// import {Formik, Field} from '';

// const Input = ({field}) => {
//   <input type="text" {...field}/>
// }


// class LocalForm extends Component {
//   render () {
//     return (
//       <form onSubmit={this.handSubmit}>
//         <Field name="surname" component={Input} />
//         <button type="submit">Submit</button>
//       </form>
//     );
//   }
// }


// class ConnetWithForm extends Component {
//   handleSubmit = value => {   
//     console.log('value');
//   }

//   renderContent = ({ handleSubmit}) => {
//       <LocalForm onSubmit={handleSubmit} />
//   }

//   render() {
//     return (
//       <div>
//         <Formik 
//           onSubmit={this.handSubmit}
//           render={this.renderContent}
//         />
//       </div>
//     );
//   }
// }
