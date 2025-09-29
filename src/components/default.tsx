import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem } from '@/components/ui/pagination';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function PaginationDemo() {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <Button variant="ghost" asChild>
            <Link href="#">
              <ChevronLeft className="rtl:rotate-180" /> Preview
            </Link>
          </Button>
        </PaginationItem>
        <PaginationItem>
          <Button variant="ghost" mode="icon" asChild>
            <Link href="#">1</Link>
          </Button>
        </PaginationItem>
        <PaginationItem>
          <Button variant="outline" mode="icon" asChild>
            <Link href="#">2</Link>
          </Button>
        </PaginationItem>
        <PaginationItem>
          <Button variant="ghost" mode="icon" asChild>
            <Link href="#">3</Link>
          </Button>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <Button variant="ghost" asChild>
            <Link href="#">
              Next <ChevronRight className="rtl:rotate-180" />
            </Link>
          </Button>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
