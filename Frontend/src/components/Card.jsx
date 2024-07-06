
export const Card = ({data,key}) => {
    const imgUrl=data.image;
    const category=data.category;
    const name=data.name;
    const title=data.title;
  return (
    <div>
        <div className="card bg-slate-100 w-96 sm:w-80 shadow-md mb-5 flex justify-center hover:scale-105">
            <figure>
                <img className="h-[320px] w-full"
                    src={imgUrl}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                    <div className="badge badge-secondary">{category}</div>
                </h2>
                <p className="text-sm">{title}</p>
                <div className="card-actions justify-between">
                    <div className="badge badge-outline p-4 bg-blue-500 rounded-lg text-white">{`$${data.price}`}</div>
                    <div className="badge badge-outline p-4 bg-orange-400 hover:bg-orange-600 text-white">Buy Now</div>
                </div>
            </div>    
         </div>
    </div>
  )
}
