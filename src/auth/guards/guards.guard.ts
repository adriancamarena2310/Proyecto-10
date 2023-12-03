import { JwtService } from '@nestjs/jwt';
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {

constructor( private JwtService: JwtService){

}

  canActivate(context: ExecutionContext):Promise<boolean> {

    const request = context.switchToHttp().getRequest();
    const  token = this.estractTokenFromHeader(request);

    return Promise.resolve(true);
  }

private estractTokenFromHeader(request: Request): string | undefined {
  const [ type, token] = request.headers['authorization']?.split(' ') ?? [];
  return type === 'Bearer' ? token : undefined;
}

}
