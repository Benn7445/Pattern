import Post from "./Post";

export const Posts = () => {
  return (
    <section className="grid grid-cols-3 gap-10 w-3/4 mb-5">
      <Post id={1} title="Test Test 123" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui aut dolorum maxime necessitatibus suscipit alias eius eaque voluptatem! Et, deleniti aliquam assumenda fuga, voluptates commodi doloremque eius vero consequuntur, repudiandae maxime laboriosam quis reprehenderit neque?" author="7D_" date={new Date()} />
      <Post id={2} title="Test Test 123" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui aut dolorum maxime necessitatibus suscipit alias eius eaque voluptatem! Et, deleniti aliquam assumenda fuga, voluptates commodi doloremque eius vero consequuntur, repudiandae maxime laboriosam quis reprehenderit neque?" author="Madoka" date={new Date()} />
      <Post id={3} title="Test Test 123" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui aut dolorum maxime necessitatibus suscipit alias eius eaque voluptatem! Et, deleniti aliquam assumenda fuga, voluptates commodi doloremque eius vero consequuntur, repudiandae maxime laboriosam quis reprehenderit neque?" author="7D_" date={new Date()} />
    </section>
  )
}

export default Posts;