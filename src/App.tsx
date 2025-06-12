import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import DialogCardPhone from './components/DialogCardPhone';
import DialogCardDetail from './components/DialogCardDetail';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="flex min-h-svh items-center justify-center gap-1">
              <DialogCardPhone />
              <Button variant={'destructive'}>Login</Button>
            </div>
          }
        />
        <Route path="/card-detail" element={<DialogCardDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
