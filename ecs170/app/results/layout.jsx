 
export default function Layout({ children }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="flex-grow md:overflow-y-auto">{children}</div>
    </div>
  );
}

//flex-grow p-6 md:overflow-y-auto md:p-12