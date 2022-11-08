import React from 'react';
import { StoreProvider } from './context';
import { useStore } from './hooks/store';

const TextInput = ({ value }: { value: 'first' | 'last' }) => {
  const [fieldValue, setStore] = useStore(store => store[value]);
  return <div>{value}: <input
    type="text"
    value={fieldValue}
    onChange={e => setStore({
      [value]: e.currentTarget.value
    })} /></div>
}

const Display = ({ value }: { value: 'first' | 'last' }) => {
  const [fieldValue] = useStore(store => store[value])
  return <div>{value} : {fieldValue}</div>
}

const FormContainer = () => {
  return (
    <div className='container'>
      <h5>FormContainer</h5>
      <TextInput value='first' />
      <TextInput value='last' />
    </div>
  )
}

const DisplayContainer = () => {
  return (
    <div className="container">
      <h5>DisplayContainer</h5>
      <Display value='first' />
      <Display value='last' />
    </div>
  )
}

const ContentContainer = () => {
  return (
    <div className="container">
      <h5>ContentContainer</h5>
      <FormContainer />
      <DisplayContainer />
    </div>
  )
}

function App() {
  return (
    <StoreProvider>
      <div className="App">
        <h5>App</h5>
        <ContentContainer />
      </div>
    </StoreProvider>
  );
}

export default App;
