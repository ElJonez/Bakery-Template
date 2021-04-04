export default function Nav() {
  return (
  <div class="mx-auto bg-blue-300 p-5 text-3xl font-light">
    <nav class="flex justify-between">
        <div>
            <a href="#">Logo</a>
        </div>
        <ul class="flex flex-row">
            <li class="pr-5"><a>Products</a></li>
            <li class="pr-5"><a>Order</a></li>
            <li class="pr-5"><a>Gallery</a></li>
            <li class="pr-5"><a>About</a></li>
            <li><a>Contact</a></li>
        </ul>
    </nav>
</div>
  );
}