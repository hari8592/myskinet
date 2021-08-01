using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Core.Specifications
{
    public interface ISpecification<T>
    {
        //get product type id =1 i.e criteria means here .Where
        Expression<Func<T,bool>> Criteria { get;  }
        List<Expression<Func<T,object>>> Includes { get; }
    }
}
