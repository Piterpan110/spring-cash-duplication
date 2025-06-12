import { Button } from '@/components/ui/button';
import DialogCard from './components/DialogCard';

function App() {
  return (
    <>
      <div className="flex min-h-svh items-center justify-center gap-1">
        <DialogCard />
        <Button variant={'destructive'}>Login</Button>
      </div>
    </>
  );
}

export default App;
