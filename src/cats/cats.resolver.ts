import { Resolver,Query } from "@nestjs/graphql";
import { CatsService } from './cats.service'

@Resolver()
export class catsResolver {
  constructor(
    private readonly catsService: CatsService,
  ) {}

  @Query(returns => String)
  async hello() {
    return 'hello';
  }
}