
export const BlogCard = ({ blogId, authorEmail, authorName, dateTime, title, content }:Blog) => {
    const formattedDate = new Date(dateTime).toLocaleDateString();
    const formattedTime = new Date(dateTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    return (
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-5xl my-4">
        <div className="md:flex">
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-teal-500 font-semibold">{authorName}</div>
            <h2 className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{title}</h2>
            <p className="mt-2 text-gray-500">{content.length > 100 ? `${content.slice(0, 100)}...` : content}</p>
            <div className="mt-4 text-sm text-gray-400">
                Posted on: {formattedDate} at {formattedTime} | {authorEmail}
            </div>
            <div className="mt-4">
              <a href={`/blogs/${blogId}`} className="text-teal-600 hover:text-teal-900">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };
