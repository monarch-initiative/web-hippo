import React from 'react';
import { Pagination } from 'semantic-ui-react';

export default ({ pagination, handlePageChange }) => (
  <div>
    {pagination.totalPages > 1 && (
      <Pagination
        style={{ width: '100%' }}
        boundaryRange={3}
        activePage={pagination.pageNo}
        totalPages={pagination.totalPages}
        onPageChange={(event, { activePage }) => {
          handlePageChange(activePage);
        }}
      />
    )}
  </div>
);
