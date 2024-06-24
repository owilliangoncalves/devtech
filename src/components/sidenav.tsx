interface SideNavProps {
  ids: string;
}
function SideNav({ ids }: SideNavProps) {
  return (
    <div className=' hidden lg:block col-start-1 bg-card px-4 py-2 rounded-md '>
      <h3 className='font-base'>Nesta página</h3>
      <p className='text-link font-light'>{`${ids}`}</p>
    </div>
  );
}

export default SideNav;
