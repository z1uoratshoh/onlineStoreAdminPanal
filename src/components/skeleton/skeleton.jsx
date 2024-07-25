import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';


export default function SkeletonColor() {
    return (
        <Skeleton
          sx={{ bgcolor: 'grey.900' ,borderRadius : "5px"}}
          variant="rectangular"
          width={180}
          height={140}          
        />
    );
  }