import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import CategoriesManager from './containers/CategoriesManager/CategoriesManager';
import TransactionForm from './components/TransactionForm/TransactionForm';

const App = () => {
    return (
        <>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/categories" element={<CategoriesManager />} />
                    <Route path="/add-transaction" element={<TransactionForm />} />
                    <Route path="*" element={<h1>Not Found :(</h1>} />
                </Routes>
            </Layout>
        </>
    );
};

export default App;
