<Header />
	<Link to='/' className="nav__link">	Boards </Link>
	<Link to='/lists'	className="nav__link">	Lists  </Link>
<Main />
	<Switch>
    <Route exact path='/' component={HomePage} />

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
