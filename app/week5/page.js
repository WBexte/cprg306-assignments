import ItemList from "./item-list";

export default function Page() {
    return (
        <main className='bg-slate-300'>
            <h1 className='text-2xl ml-4'>Shopping List</h1>
            <ItemList/>
        </main>
    );
}