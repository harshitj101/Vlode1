// Modern skeleton for blog card component
export const Skeleton = () => {
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
      {/* Card Header */}
      <div className="p-6">
        {/* Author and Date */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer bg-[length:400%_400%]"></div>
            <div>
              <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer bg-[length:400%_400%] rounded w-24 mb-2"></div>
              <div className="h-3 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 animate-shimmer bg-[length:400%_400%] rounded w-32"></div>
            </div>
          </div>
          {/* Bookmark placeholder */}
          <div className="w-8 h-8 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 animate-shimmer bg-[length:400%_400%] rounded-full"></div>
        </div>

        {/* Title and Content */}
        <div className="mb-4">
          <div className="h-6 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer bg-[length:400%_400%] rounded w-4/5 mb-3"></div>
          <div className="h-4 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 animate-shimmer bg-[length:400%_400%] rounded w-full mb-2"></div>
          <div className="h-4 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 animate-shimmer bg-[length:400%_400%] rounded w-5/6 mb-2"></div>
          <div className="h-4 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 animate-shimmer bg-[length:400%_400%] rounded w-3/4"></div>
        </div>

        {/* Card Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center space-x-4">
            {/* Like button placeholder */}
            <div className="flex items-center space-x-1">
              <div className="w-4 h-4 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 animate-shimmer bg-[length:400%_400%] rounded"></div>
              <div className="w-4 h-3 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 animate-shimmer bg-[length:400%_400%] rounded"></div>
            </div>
            {/* Category tag placeholder */}
            <div className="w-16 h-6 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 animate-shimmer bg-[length:400%_400%] rounded-full"></div>
          </div>
          {/* Read more placeholder */}
          <div className="w-20 h-4 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 animate-shimmer bg-[length:400%_400%] rounded"></div>
        </div>
      </div>
    </div>
  );
};

// Modern skeleton for blog reading page
export const PageSkeleton = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Reading Progress Bar Placeholder */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer bg-[length:400%_400%] z-50"></div>

      {/* Navigation Header Placeholder */}
      <div className="sticky top-0 z-40 bg-white/90 backdrop-blur-lg border-b border-gray-200 px-4 py-3">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="w-32 h-6 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer bg-[length:400%_400%] rounded"></div>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer bg-[length:400%_400%] rounded-full"></div>
            <div className="w-8 h-8 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer bg-[length:400%_400%] rounded-full"></div>
            <div className="w-8 h-8 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer bg-[length:400%_400%] rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Article Content Placeholder */}
      <article className="max-w-4xl mx-auto px-4 py-8">
        {/* Article Header */}
        <header className="mb-12">
          {/* Title */}
          <div className="h-12 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer bg-[length:400%_400%] rounded w-4/5 mb-6"></div>

          {/* Author Info and Meta */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer bg-[length:400%_400%]"></div>
              <div>
                <div className="h-5 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer bg-[length:400%_400%] rounded w-32 mb-2"></div>
                <div className="flex items-center space-x-4">
                  <div className="h-4 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 animate-shimmer bg-[length:400%_400%] rounded w-20"></div>
                  <div className="h-4 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 animate-shimmer bg-[length:400%_400%] rounded w-24"></div>
                  <div className="h-4 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 animate-shimmer bg-[length:400%_400%] rounded w-20"></div>
                </div>
              </div>
            </div>
            {/* Follow Button */}
            <div className="w-20 h-10 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer bg-[length:400%_400%] rounded-full"></div>
          </div>

          {/* Article Tags */}
          <div className="flex items-center space-x-2 mb-8">
            <div className="w-20 h-6 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 animate-shimmer bg-[length:400%_400%] rounded-full"></div>
            <div className="w-16 h-6 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 animate-shimmer bg-[length:400%_400%] rounded-full"></div>
          </div>
        </header>

        {/* Article Body */}
        <div className="space-y-6 mb-16">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="h-6 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 animate-shimmer bg-[length:400%_400%] rounded w-full"
            ></div>
          ))}
          <div className="h-6 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 animate-shimmer bg-[length:400%_400%] rounded w-3/4"></div>
        </div>

        {/* Article Footer */}
        <footer className="pt-8 border-t border-gray-200">
          {/* Engagement Actions */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-6">
              <div className="w-12 h-6 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 animate-shimmer bg-[length:400%_400%] rounded"></div>
              <div className="w-12 h-6 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 animate-shimmer bg-[length:400%_400%] rounded"></div>
            </div>
            <div className="w-20 h-10 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 animate-shimmer bg-[length:400%_400%] rounded-lg"></div>
          </div>

          {/* Author Card */}
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer bg-[length:400%_400%]"></div>
              <div className="flex-1">
                <div className="h-6 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer bg-[length:400%_400%] rounded w-40 mb-2"></div>
                <div className="h-4 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 animate-shimmer bg-[length:400%_400%] rounded w-full mb-1"></div>
                <div className="h-4 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 animate-shimmer bg-[length:400%_400%] rounded w-3/4 mb-3"></div>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-8 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer bg-[length:400%_400%] rounded-lg"></div>
                  <div className="w-24 h-4 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 animate-shimmer bg-[length:400%_400%] rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </article>
    </div>
  );
};

// Modern skeleton for user profile page
export const UserPageSkeleton = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Cover Photo Area Placeholder */}
      <div className="relative h-64 md:h-80 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 animate-shimmer bg-[length:400%_400%]">
        <div className="absolute bottom-6 left-6 right-6">
          <div className="flex items-end justify-between">
            <div className="flex items-end space-x-6">
              {/* Profile Picture */}
              <div className="relative">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-white p-1 shadow-lg">
                  <div className="w-full h-full rounded-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer bg-[length:400%_400%]"></div>
                </div>
                <div className="absolute bottom-2 right-2 w-8 h-8 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer bg-[length:400%_400%] rounded-full"></div>
              </div>

              {/* User Info */}
              <div className="pb-2">
                <div className="h-8 bg-white/80 rounded w-48 mb-2 bg-gradient-to-r from-white/60 via-white/80 to-white/60 animate-shimmer bg-[length:400%_400%]"></div>
                <div className="h-5 bg-gradient-to-r from-white/40 via-white/60 to-white/40 animate-shimmer bg-[length:400%_400%] rounded w-64 mb-2"></div>
                <div className="h-4 bg-gradient-to-r from-white/30 via-white/50 to-white/30 animate-shimmer bg-[length:400%_400%] rounded w-32"></div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-3">
              <div className="w-24 h-10 bg-gradient-to-r from-white/10 via-white/20 to-white/10 animate-shimmer bg-[length:400%_400%] rounded-lg"></div>
              <div className="w-20 h-10 bg-gradient-to-r from-red-300 via-red-400 to-red-300 animate-shimmer bg-[length:400%_400%] rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-10">
        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="h-8 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer bg-[length:400%_400%] rounded w-12 mb-2"></div>
                  <div className="h-4 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 animate-shimmer bg-[length:400%_400%] rounded w-16"></div>
                </div>
                <div className="w-8 h-8 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 animate-shimmer bg-[length:400%_400%] rounded"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Content Tabs */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="py-4 px-2">
                  <div className="h-5 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer bg-[length:400%_400%] rounded w-20"></div>
                </div>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, index) => (
                <Skeleton key={index} />
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 mb-8">
          <div className="h-6 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer bg-[length:400%_400%] rounded w-32 mb-4"></div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg"
              >
                <div className="w-5 h-5 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer bg-[length:400%_400%] rounded"></div>
                <div className="h-5 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer bg-[length:400%_400%] rounded w-32"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
