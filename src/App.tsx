import { Button } from '@/components/ui/button';
import DialogCardPhone from './components/DialogCardPhone';

function App() {
  return (
    <>
      <div className="flex min-h-svh items-center justify-center gap-1">
        <DialogCardPhone />
        <Button variant={'destructive'}>Login</Button>
      </div>
    </>
  );
}

export default App;
