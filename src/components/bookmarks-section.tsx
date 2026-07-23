import {
  ArrowUpRightIcon,
  ArticleIcon,
  BookIcon,
  CourseIcon,
  ReferenceIcon,
} from "@/components/icons";
import { LinedSection } from "@/components/lined-section";
import { ShowMore } from "@/components/show-more";
import {
  BookmarkCategory,
  bookmarks,
  formatBookmarkDate,
} from "@/data/bookmarks";

const VISIBLE_LIMIT = 6;

const categoryIcons = {
  [BookmarkCategory.ARTICLE]: ArticleIcon,
  [BookmarkCategory.COURSE]: CourseIcon,
  [BookmarkCategory.BOOK]: BookIcon,
  [BookmarkCategory.REFERENCE]: ReferenceIcon,
};

export function BookmarksSection() {
  const visible = bookmarks.slice(0, VISIBLE_LIMIT);
  const hidden = bookmarks.slice(VISIBLE_LIMIT);

  return (
    <LinedSection
      id="bookmarks"
      title={
        <>
          Bookmarks{" "}
          <span className="font-mono text-xs text-muted">
            ({bookmarks.length})
          </span>
        </>
      }
    >
      <div>
        {visible.map((bookmark) => (
          <BookmarkRow key={bookmark.url} bookmark={bookmark} />
        ))}

        <ShowMore limit={VISIBLE_LIMIT} total={bookmarks.length}>
          {hidden.map((bookmark) => (
            <BookmarkRow key={bookmark.url} bookmark={bookmark} />
          ))}
        </ShowMore>
      </div>
    </LinedSection>
  );
}

function BookmarkRow({ bookmark }: { bookmark: (typeof bookmarks)[number] }) {
  const Icon = categoryIcons[bookmark.category];

  return (
    <article className="list-row group/bookmark relative flex items-center border-b border-line first:border-t pr-2 transition-colors hover:bg-accent-muted">
      <div className="mx-4 flex size-6 shrink-0 items-center justify-center rounded-md border border-line bg-accent-muted text-muted">
        <Icon className="size-4" />
      </div>

      <div className="flex-1 space-y-1 border-l border-dashed border-line p-4 pr-2">
        <h3 className="text-base font-medium leading-tight tracking-tight text-balance">
          <a
            href={bookmark.url}
            target="_blank"
            rel="noopener noreferrer"
            className="underline-offset-4 hover:underline"
          >
            {bookmark.title}
          </a>
        </h3>
        <dl className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted">
          {bookmark.author && (
            <>
              <div>
                <dt className="sr-only">Author</dt>
                <dd>{bookmark.author}</dd>
              </div>
              <span aria-hidden className="text-line">
                |
              </span>
            </>
          )}
          <div>
            <dt className="sr-only">Category</dt>
            <dd>{bookmark.category}</dd>
          </div>
          <span aria-hidden className="text-line">
            |
          </span>
          <div>
            <dt className="sr-only">Bookmarked on</dt>
            <dd className="font-mono">
              {formatBookmarkDate(bookmark.bookmarkedAt)}
            </dd>
          </div>
        </dl>
      </div>

      <ArrowUpRightIcon className="size-4 shrink-0 text-muted" />
    </article>
  );
}
