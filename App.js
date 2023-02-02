import Chatbot from 'react-simple-chatbot';
const steps=[
{
    id: '0',
    message:'Hey Geek!',
    end: true,

}
];
function App() {
    return(
        <div className='App'>
            <h1> Welcome to PVRM</h1>
            <ChatBot steps={steps} />

            </div>
    );
}
export default App;