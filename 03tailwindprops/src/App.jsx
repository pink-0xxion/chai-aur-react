import './App.css'
import Card from './components/Card'

function App() {

  let myObj = {
    username: "joker",
    age: 21
  };

  let newArr = [1, 2, 3]; 

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
      {/* <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://images.pexels.com/photos/66885/owl-yellow-eyes-white-bird-66885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width="384" height="512" />
  <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p class="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption class="font-medium">
      <div class="text-sky-500 dark:text-sky-400">
        Sarah Dayan
      </div>
      <div class="text-slate-700 dark:text-slate-500">
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
</figure> */}

  {/* <Card someObj={name: "joker"} someArray=[1, 2, 3, 4] />  <---ERROR */}

  <Card username="chaiaurcode" btnText="click me" someObj={myObj} someArray={newArr} />
  <Card username="joker"  />
    
    </>
  )
}

export default App
