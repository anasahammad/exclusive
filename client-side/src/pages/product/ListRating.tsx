import moment from "moment";
import { Rating } from "@mui/material";
import TopContent from "@/components/shared/TopContent";
import Avatar from "./Avatar";

interface ListRatingProps {
  product: any;
}

const ListRating: React.FC<ListRatingProps> = ({ product }) => {
  return (
    <div className="mt-6">
      <TopContent text="Product Review" />
      <div className="text-sm mt-2">
        {product.reviews && product.reviews.length > 0 ? (
          product.reviews.map((review: any, index: number) => (
            <div key={index} className="max-w-[300px] ">
              <div className="flex gap-2 items-center">
                {/* Check if user info is available */}
                <Avatar src={review.user?.image} />
                <div className="font-semibold">{review.user?.name || "Anonymous"}</div>
                <div className="font-light">{moment(review.createdDate).fromNow()}</div>
              </div>
              <div className="mt-2">
                <Rating value={review.rating} readOnly />
                <div className="ml-2">{review.comment}</div>
                <hr className="my-4" />
              </div>
            </div>
          ))
        ) : (
          <div>No reviews available for this product.</div>
        )}
      </div>
    </div>
  );
};

export default ListRating;
