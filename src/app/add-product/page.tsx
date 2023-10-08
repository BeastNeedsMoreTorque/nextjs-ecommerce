// import { metadata } from '../layout';
export const metadata = {
  title: "Add Product",
};

export default function AddProductPage() {
  return (
    <section>
      <h1 className="mb-3 text-lg font-bold">Add Product</h1>
      <form>
        <input
          required
          name="name"
          placeholder="Name"
          type="text"
          className="input-bordered mb-3 w-full"
        />
        <textarea
          required
          name="description"
          placeholder="Description"
          className="textarea textarea-bordered mb-3 w-full"
        ></textarea>
        <input
          required
          name="imageUrl"
          placeholder="Image URL"
          type="url"
          className="input-bordered mb-3 w-full"
        />
        <input
          required
          name="price"
          placeholder="Price"
          type="number"
          className="input-bordered mb-3 w-full"
        />
        <button className="btn btn-primary btn-block" type="submit">
          Add Product
        </button>
      </form>
    </section>
  );
}
